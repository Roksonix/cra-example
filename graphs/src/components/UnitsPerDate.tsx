import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import BarLabel from "./BarLabel";

type IProps = {
    data: Array<ChartItem>;
}

const tooltipFormatter = (value: string, name: string): [string, string] => ([
    value,
    name[0].toUpperCase() + name.substring(1)
]);

const UnitsPerDate = ({ data }: IProps) => (
    <ResponsiveContainer width="80%" height={600}>
        <BarChart data={data} width={960} height={600} margin={{
            top: 30,
            right: 30,
            left: 20,
            bottom: 30
          }}>
            <XAxis dataKey="date" padding={{ left: 5, right: 5 }} />
            <YAxis />
            <Tooltip formatter={tooltipFormatter} />
            <Bar dataKey="units" fill="#BB2649" label={BarLabel} barSize={50} />
        </BarChart>
    </ResponsiveContainer>
);

export default UnitsPerDate;
