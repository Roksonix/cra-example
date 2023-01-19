type IProps = {
    x: number;
    y: number;
    value: string;
}

const BarLabel = ({ x, y, value }: IProps) => (
    <text
        x={x}
        y={y}
        dx={24}
        dy={-4}
        fontSize="16"
        fontFamily="sans-serif"
        fill="#FFF"
        textAnchor="middle"
      >
        {value}
    </text>
);

export default BarLabel;
