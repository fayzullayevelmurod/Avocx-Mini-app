import { useState } from 'react';
import { Link } from 'react-router-dom';
import Title from '../../components/Title';

const Tariffs = () => {
  const [selectedTariff, setSelectedTariff] = useState('Pro');

  const tariffs = [
    {
      name: 'Basic',
      features: [
        'Only in avocx app',
        '30 categories',
        '50 products',
        'Crypto fee 0,6%',
      ],
    },
    {
      name: 'Pro',
      features: [
        'Own app + avocx',
        '150 categories',
        '200 products',
        'Crypto fee 0,5%',
      ],
    },
    {
      name: 'Ultra',
      features: [
        'Own app + avocx',
        '1000 categories',
        '5000 products',
        'Crypto fee 0,4%',
      ],
    },
  ];

  const getTariffStyles = (tariffName) =>
    `flex-1 duration-200 bg-body-bg pt-[15px] p-[7px] rounded-base border ${
      selectedTariff === tariffName
        ? 'border-primary shadow-selected-tariff'
        : 'border-iron shadow-tariff'
    } cursor-pointer`;

  const getTitleStyles = (tariffName) =>
    `text-center mb-[6px] font-semibold italic ${
      selectedTariff === tariffName ? 'text-[30px]' : 'text-xl'
    }`;

  return (
    <>
      <Title label='Тарифы Avocx Store' />
      <div className='flex items-center gap-3 mb-[38px] min-h-[197px]'>
        {tariffs.map((tariff) => (
          <div
            key={tariff.name}
            className={getTariffStyles(tariff.name)}
            onClick={() => setSelectedTariff(tariff.name)}
          >
            <h3 className={getTitleStyles(tariff.name)}>{tariff.name}</h3>
            <ul>
              <li className='text-[9px] text-[#D3D3D3]'>Up to:</li>
              {tariff.features.map((feature, index) => (
                <li key={index} className='text-[9px] text-[#D3D3D3]'>
                  — {feature}
                </li>
              ))}
            </ul>
            <span className='text-[#707070] text-[9px] block'>more info..</span>
            <Link
              className='mt-[14px] text-[11px] text-body-bg bg-base-white w-full h-7 flex items-center justify-center gap-2 rounded-[10px]'
              to='#!'
            >
              <span>Info</span>
              <img src='/images/icons/next-arrow.svg' alt='next arrow' />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Tariffs;
