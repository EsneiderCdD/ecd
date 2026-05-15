import {
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
    ResponsiveContainer
} from "recharts";
import styles from "../styles/InfoPanel.module.css";

function RadarChartComponent({ data }) {
    return (
        <div className={styles.chartContainer}>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={data} margin={{ top: 10, right: 30, bottom: 10, left: 30 }}>
                    <PolarGrid stroke="var(--border-color)" />
                    <PolarAngleAxis
                        dataKey="subject"
                        tick={{
                            fontSize: 11,
                            fontFamily: "'Source Code Pro', monospace",
                            fill: "var(--text-secondary)"
                        }}
                    />
                    <PolarRadiusAxis
                        angle={30}
                        domain={[0, 5]}
                        tick={{
                            fontSize: 10,
                            fontFamily: "'Source Code Pro', monospace",
                            fill: "var(--text-secondary)"
                        }}
                        tickCount={6}
                    />
                    <Radar
                        dataKey="value"
                        stroke="var(--accent-color, #8884d8)"
                        fill="var(--accent-color, #8884d8)"
                        fillOpacity={0.25}
                        strokeWidth={1.5}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default RadarChartComponent;
