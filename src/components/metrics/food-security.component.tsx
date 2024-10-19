import { useGetCoreData } from '@/queries';
import { Country } from '@/types';
import {
  Combobox,
  Input,
  InputBase,
  Loader,
  Paper,
  ScrollArea,
  useCombobox
} from '@mantine/core';
import { useMemo, useState } from 'react';
import CountryComboItem from './country-combo.item';

interface Props {
  selectedCountry: Country | null;
  setSelectedCountry: React.Dispatch<React.SetStateAction<Country | null>>;
}

const FoodSecurityComponent = (props: Props) => {
  const { selectedCountry, setSelectedCountry } = props;

  const { data: coreData, loading } = useGetCoreData();

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption()
  });

  const [searchQuery, setSearchQuery] = useState('');

  const filteredCountries = useMemo(() => {
    const filtered = searchQuery
      ? coreData?.countries?.filter(country =>
          country.country.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : coreData?.countries;

    return filtered?.slice(0, 10);
  }, [coreData, searchQuery]);

  const comboOptions = filteredCountries?.map(item => (
    <Combobox.Option
      value={item.country.iso3}
      key={item.country.id}
      onClick={() => setSelectedCountry(item.country)}>
      <CountryComboItem country={item.country} />
    </Combobox.Option>
  ));

  return (
    <Paper
      shadow="md"
      p="md"
      style={{
        position: 'absolute',
        top: 90,
        left: 160,
        right: 0,
        zIndex: 1006,
        maxWidth: 350
      }}>
      <Combobox
        withinPortal
        store={combobox}
        onOptionSubmit={() => {
          combobox.closeDropdown();
        }}>
        <Combobox.Target>
          <InputBase
            component="button"
            type="button"
            pointer
            rightSectionPointerEvents="none"
            onClick={() => combobox.toggleDropdown()}
            multiline
            rightSection={
              loading ? <Loader size={18} /> : <Combobox.Chevron />
            }>
            {selectedCountry ? (
              <CountryComboItem country={selectedCountry} />
            ) : (
              <Input.Placeholder>Select a country</Input.Placeholder>
            )}
          </InputBase>
        </Combobox.Target>

        <Combobox.Dropdown style={{ zIndex: 1006 }}>
          <Combobox.Search
            value={searchQuery}
            onChange={event => setSearchQuery(event.currentTarget.value)}
            placeholder="Search for country"
            rightSection={loading ? <Loader size={18} /> : null}
          />

          <Combobox.Options>
            <ScrollArea.Autosize mah={400} type="scroll">
              {comboOptions?.length === 0 ? (
                <Combobox.Empty>No data</Combobox.Empty>
              ) : (
                comboOptions
              )}
            </ScrollArea.Autosize>
          </Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </Paper>
  );
};

export default FoodSecurityComponent;
