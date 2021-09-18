import React, {FC} from 'react';
import cl from './TableHeader.module.css'

interface TableHeaderProps {
    setKindOfSort:(value:string) => void
}

const TableHeader:FC<TableHeaderProps> = ({setKindOfSort}) => {
    return (
        <div>
            <div className= {cl.tableHeaderBlock}>
                <div className= {cl.numberBlock}> №</div>
                <div  className = {cl.nameBlock}>Country</div>
                <div className = {cl.totalConfirmed}> TotalConfirmed
                    <div  onClick = {() => setKindOfSort('up')} className = {cl.up}>      </div>
                    <div  onClick = {() => setKindOfSort('down')} className = {cl.down}>  </div>
                </div>
            </div>
        </div>
    );
};

export default TableHeader;