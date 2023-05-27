import React, { ReactElement } from 'react';
import { DataTableType } from '../../types';
require('./dataTableStyle.css');

type JSXNode = JSX.Element | null;
const DataTable: React.FC<DataTableType> = (props): JSXNode => {
    const { tData, tableTitle, categoryTitle} = props;

    return (
        <section className='wrapper'>
            <ul role="listbox"  className='listbox'>
                <li role="listitem" className='listitem'>
                    <h3>{tableTitle}</h3>
                </li>
                {tData && Object.keys(tData).map((item) => (
                    <li className='listitem heading' role="listitem">
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
            <ul role="listbox"  className='listbox'>
                <li className='listitem' role="listitem">
                    <h3>{categoryTitle} {'Mean'}</h3>
                </li>
                {tData && Object.keys(tData).map((item) => (
                    <li className='listitem' role="listitem">
                        <span>{tData[item].mean.toString()}</span>
                    </li>
                ))}
            </ul>
            <ul role="listbox"  className='listbox'>
                <li className='listitem' role="listitem">
                    <h3>{categoryTitle} {'Median'}</h3>
                </li>
                {tData && Object.keys(tData).map((item) => (
                    <li className='listitem' role="listitem">
                        <span>{tData[item].median.toString()}</span>
                    </li>
                ))}
            </ul>
            <ul role="listbox"  className='listbox'>
                <li className='listitem' role="listitem">
                    <h3>{categoryTitle} {'Mode'}</h3>
                </li>
                {tData && Object.keys(tData).map((item) => (
                    <li className='listitem' role="listitem">
                        <span>{tData[item].mode.toString()}</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default DataTable;