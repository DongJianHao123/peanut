import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import "./index.scss"
interface IProps extends React.HTMLAttributes<HTMLElement> {
    top: string
}
const Loading = (props: IProps) => {
    const { top } = props;
    return <Spin className='loading' style={{ opacity: "unset", paddingTop: top }} tip="正在加载..." indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />

}

export default Loading;