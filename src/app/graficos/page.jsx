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
    ResponsiveContainer,
    LabelList,
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
        <div className="page-graficos">
            <Navbar />
            <h1>Gráficos</h1>
            <div className="semanas">
                <h2>Semana 1</h2>
                <h3>Temperatura</h3>
                <ResponsiveContainer width="100%" aspect={1.3}>
                    <BarChart
                        data={temperaturaSemana1}
                        margin={{
                            top: 30,
                            right: 20,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid
                            stroke="#5f5f5f"
                            strokeDasharray="4 4"
                            horizontal={true}
                            vertical={false}
                        />
                        <XAxis dataKey="dias" />
                        <YAxis domain={[0, 26]} />
                        <Tooltip />

                        <Bar
                            dataKey="Temperatura_Kit"
                            animationBegin={500}
                            fill="#3434c7"
                        >
                            <LabelList
                                dataKey="Temperatura_Kit"
                                position="top"
                                formatter={(value) => `${value}°C`}
                                fill="white"
                            />
                        </Bar>
                        <Bar
                            dataKey="Temperatura_LABDISC"
                            animationBegin={500}
                            fill="#e92a2a"
                        >
                            <LabelList
                                dataKey="Temperatura_LABDISC"
                                position="top"
                                formatter={(value) => `${value}°C`}
                                fill="white"
                            />
                        </Bar>
                        <Bar
                            dataKey="Temperatura_Internet"
                            animationBegin={500}
                            fill="#00a300"
                        >
                            <LabelList
                                dataKey="Temperatura_Internet"
                                position="top"
                                formatter={(value) => `${value}°C`}
                                fill="white"
                            />
                        </Bar>
                        <Legend />
                    </BarChart>
                </ResponsiveContainer>
                <h3>Umidade</h3>
                <ResponsiveContainer width="100%" aspect={1.3}>
                    <BarChart
                        data={umidadeSemana1}
                        margin={{
                            top: 30,
                            right: 20,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid
                            stroke="#5f5f5f"
                            strokeDasharray="4 4"
                            horizontal={true}
                            vertical={false}
                        />
                        <XAxis dataKey="dias" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="Umidade_Kit" fill="#3434c7">
                            <LabelList
                                dataKey="Umidade_Kit"
                                position="top"
                                formatter={(value) => `${value}%`}
                                fill="white"
                            />
                        </Bar>
                        <Bar dataKey="Umidade_LABDISC" fill="#e92a2a">
                            <LabelList
                                dataKey="Umidade_LABDISC"
                                position="top"
                                formatter={(value) => `${value}%`}
                                fill="white"
                            />
                        </Bar>
                        <Bar dataKey="Umidade_Internet" fill="#00a300">
                            <LabelList
                                dataKey="Umidade_Internet"
                                position="top"
                                formatter={(value) => `${value}%`}
                                fill="white"
                            />
                        </Bar>
                        <Legend />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className="semanas">
                <h2>Semana 2</h2>
                <h3>Temperatura</h3>
                <ResponsiveContainer width="100%" aspect={1.3}>
                    <BarChart
                        data={temperaturaSemana2}
                        margin={{
                            top: 30,
                            right: 20,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid
                            stroke="#5f5f5f"
                            strokeDasharray="4 4"
                            horizontal={true}
                            vertical={false}
                        />
                        <XAxis dataKey="dias" />
                        <YAxis domain={[0, 26]} />
                        <Tooltip />
                        <Bar dataKey="Temperatura_Kit" fill="#3434c7">
                            <LabelList
                                dataKey="Temperatura_Kit"
                                position="top"
                                formatter={(value) => `${value}°C`}
                                fill="white"
                            />
                        </Bar>
                        <Bar dataKey="Temperatura_LABDISC" fill="#e92a2a">
                            <LabelList
                                dataKey="Temperatura_LABDISC"
                                position="top"
                                formatter={(value) => `${value}°C`}
                                fill="white"
                            />
                        </Bar>
                        <Bar dataKey="Temperatura_Internet" fill="#00a300">
                            <LabelList
                                dataKey="Temperatura_Internet"
                                position="top"
                                formatter={(value) => `${value}°C`}
                                fill="white"
                            />
                        </Bar>
                        <Legend />
                    </BarChart>
                </ResponsiveContainer>
                <h3>Umidade</h3>
                <ResponsiveContainer width="100%" aspect={1.3}>
                    <BarChart
                        data={umidadeSemana2}
                        margin={{
                            top: 30,
                            right: 20,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid
                            stroke="#5f5f5f"
                            strokeDasharray="4 4"
                            horizontal={true}
                            vertical={false}
                        />
                        <XAxis dataKey="dias" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="Umidade_Kit" fill="#3434c7">
                            <LabelList
                                dataKey="Umidade_Kit"
                                position="top"
                                formatter={(value) => `${value}%`}
                                fill="white"
                            />
                        </Bar>
                        <Bar dataKey="Umidade_LABDISC" fill="#e92a2a">
                            <LabelList
                                dataKey="Umidade_LABDISC"
                                position="top"
                                formatter={(value) => `${value}%`}
                                fill="white"
                            />
                        </Bar>
                        <Bar dataKey="Umidade_Internet" fill="#00a300">
                            <LabelList
                                dataKey="Umidade_Internet"
                                position="top"
                                formatter={(value) => `${value}%`}
                                fill="white"
                            />
                        </Bar>
                        <Legend />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
