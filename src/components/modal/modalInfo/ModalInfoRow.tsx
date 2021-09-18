import React, {FC} from 'react';
import cl from "./ModalInfoRow.module.css";
import heartBeat from "../../../UI/heartBeat.svg"
import medicalFile from "../../../UI/medicalFile.svg"
import skull from "../../../UI/skull.svg"
import { ModalInfoRowProps } from '../../../types/country';


const ModalInfoRow: FC<ModalInfoRowProps> = ({  TotalDeaths, TotalRecovered, TotalConfirmed}) => {
    return (
        <div className = {cl.row}>
            <div className = {cl.totalConfirmed}>
                <div>
                    <img src={heartBeat} alt="#"/>
                    <span>Total Confirmed</span>
                </div>
                <div className = {cl.Count}>{TotalConfirmed}</div>
            </div>
            <div className = {cl.totalDeath}>
                <div>
                    <img src={skull} alt="#"/>
                    <span>Total Death</span>
                </div>
                <div className = {cl.Count}>{TotalDeaths}</div>
            </div>
            <div className = {cl.totalRecovered}>
                <div>
                    <img src={medicalFile} alt="#"/>
                    <span>Total Recovered</span>
                </div>
                <div className = {cl.Count}>{TotalRecovered}</div>
            </div>
        </div>

    );
};

export default ModalInfoRow;