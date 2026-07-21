"use client";

import Navbar from "../navbar";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";

const temperaturaSemana1 = [
    {
        dias: "06/07/2026",
        Temperatura_Kit: 21.9,
        Temperatura_LABDISC: 20.2,
        Temperatura_Internet: 19,
    },
    {
        dias: "09/07/2026",
        Temperatura_Kit: 22,
        Temperatura_LABDISC: 19.4,
        Temperatura_Internet: 15,
    },
    {
        dias: "10/07/2026",
        Temperatura_Kit: 20.1,
        Temperatura_LABDISC: 18.2,
        Temperatura_Internet: 15,
    },
];
const umidadeSemana1 = [
    {
        dias: "06/07/2026",
        Umidade_Kit: 62,
        Umidade_LABDISC: 81.5,
        Umidade_Internet: 89,
    },
    {
        dias: "09/07/2026",
        Umidade_Kit: 72,
        Umidade_LABDISC: 71.7,
        Umidade_Internet: 74,
    },
    {
        dias: "10/07/2026",
        Umidade_Kit: 66,
        Umidade_LABDISC: 85.9,
        Umidade_Internet: 89,
    },
];
const temperaturaSemana2 = [
    {
        dias: "13/07/2026",
        Temperatura_Kit: 22.2,
        Temperatura_LABDISC: 23.7,
        Temperatura_Internet: 18,
    },
    {
        dias: "14/07/2026",
        Temperatura_Kit: 17.5,
        Temperatura_LABDISC: 17,
        Temperatura_Internet: 13,
    },
    {
        dias: "16/07/2026",
        Temperatura_Kit: 23,
        Temperatura_LABDISC: 21,
        Temperatura_Internet: 17,
    },
];
const umidadeSemana2 = [
    {
        dias: "13/07/2026",
        Umidade_Kit: 43,
        Umidade_LABDISC: 61.5,
        Umidade_Internet: 66,
    },
    {
        dias: "14/07/2026",
        Umidade_Kit: 92,
        Umidade_LABDISC: 78.2,
        Umidade_Internet: 87,
    },
    {
        dias: "16/07/2026",
        Umidade_Kit: 61,
        Umidade_LABDISC: 80,
        Umidade_Internet: 85,
    },
];
export default function Graficos() {
    return (
        <div>
            <Navbar />
            <h1>Gráficos</h1>
            <div className="semanas">
                <h2>Semana 1</h2>
                <h3>Temperatura</h3>
                <BarChart className="graficos" width={600} height={300} data={temperaturaSemana1}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="dias" />
                    <YAxis />
                    <Tooltip />
                    <Bar
                        dataKey="Temperatura_Kit"
                        animationDuration={1000}
                        animationBegin={500}
                        fill="#3434c7"
                    />
                    <Bar
                        dataKey="Temperatura_LABDISC"
                        animationDuration={1000}
                        animationBegin={500}
                        fill="#e92a2a"
                    />
                    <Bar
                        dataKey="Temperatura_Internet"
                        animationDuration={1000}
                        animationBegin={500}
                        fill="#00a300"
                    />
                    <Legend />
                </BarChart>
                <h3>Umidade</h3>
                <BarChart width={600} height={300} data={umidadeSemana1}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="dias" />
                    <YAxis />
                    <Tooltip />
                    <Bar
                        dataKey="Umidade_Kit"
                        animationDuration={1000}
                        animationBegin={500}
                        fill="#3434c7"
                    />
                    <Bar
                        dataKey="Umidade_LABDISC"
                        animationDuration={1000}
                        animationBegin={500}
                        fill="#e92a2a"
                    />
                    <Bar
                        dataKey="Umidade_Internet"
                        animationDuration={1000}
                        animationBegin={500}
                        fill="#00a300"
                    />
                    <Legend />
                </BarChart>
            </div>
            <div className="semanas">
                <h2>Semana 2</h2>
                <h3>Temperatura</h3>
                <BarChart width={600} height={300} data={temperaturaSemana2}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="dias" />
                    <YAxis />
                    <Tooltip />
                    <Bar
                        dataKey="Temperatura_Kit"
                        animationDuration={1000}
                        animationBegin={500}
                        fill="#3434c7"
                    />
                    <Bar
                        dataKey="Temperatura_LABDISC"
                        animationDuration={1000}
                        animationBegin={500}
                        fill="#e92a2a"
                    />
                    <Bar
                        dataKey="Temperatura_Internet"
                        animationDuration={1000}
                        animationBegin={500}
                        fill="#00a300"
                    />
                    <Legend />
                </BarChart>
                <h3>Umidade</h3>
                <BarChart width={600} height={300} data={umidadeSemana2}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="dias" />
                    <YAxis />
                    <Tooltip />
                    <Bar
                        dataKey="Umidade_Kit"
                        animationDuration={1000}
                        animationBegin={500}
                        fill="#3434c7"
                    />
                    <Bar
                        dataKey="Umidade_LABDISC"
                        animationDuration={1000}
                        animationBegin={500}
                        fill="#e92a2a"
                    />
                    <Bar
                        dataKey="Umidade_Internet"
                        animationDuration={1000}
                        animationBegin={500}
                        fill="#00a300"
                    />
                    <Legend />
                </BarChart>
            </div>
        </div>
    );
}
