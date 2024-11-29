'use client';

import Select from 'react-select';
import useCountrySelect from '@/app/hooks/useCountrySelect';
import Image from 'next/image';

export type CountrySelectValue = {
    value: string;
    label: string;
    flag: string;
    latlng: number[];
    region: string;
}

interface CountrySelectProps {
    value?: CountrySelectValue;
    onChange: (value: CountrySelectValue) => void;
}


const CountrySelect: React.FC<CountrySelectProps> = ({ value, onChange }) => {
    const { getAll } = useCountrySelect();

    return (
        <div>
            <Select
                placeholder="Select Your Country"
                isClearable
                options={getAll()}
                value={value}
                onChange={(value) => onChange(value as CountrySelectValue)}
                formatOptionLabel={(option: any) => (
                    <div className="flex flex-row items-center gap-3">
                        {/* Use Next.js Image component */}
                        <div className="relative w-6 h-4">
                            <Image
                                src={option.flag}
                                alt={`${option.label} flag`}
                                fill
                                className="object-cover rounded-sm"
                                unoptimized 
                            />
                        </div>
                        <div>
                            {option.label},
                            <span className="text-neutral-500 ml-1">{option.region}</span>
                        </div>
                    </div>
                )}
                classNames={{
                    control: () => "p-3 border-2",
                    input: () => "text-lg",
                    option: () => "text-lg",
                }}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 6,
                    colors: {
                        ...theme.colors,
                        primary: "black",
                        primary25: "#ffe4e6",
                    },
                })}
            menuPortalTarget={document.body} // Render dropdown at the root
            styles={{
                menuPortal: (base) => ({ ...base, zIndex: 9999 }), // High z-index to overlay everything
            }}
        />
        </div>
    );
};

export default CountrySelect;
