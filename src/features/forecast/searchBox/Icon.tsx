import * as Icons from "../../../components/icons";

type Props = {
  name: string;
  className?: string;
}

const Days: React.FC<Props> = (props) => {
  switch (props.name) {
    case "Rain":
      return <Icons.RainIcon />
    case "Clouds":
      return <Icons.CloudIcon />
    case "Clear":
      return <Icons.SunIcon />
    case "Snow":
      return <Icons.SnowIcon />
    case "Fog":
      return <Icons.FogIcon />
    case "Sun rain":
      return <Icons.SunRainIcon />
  
    default:
      return null;
  }
};

Days.defaultProps = {
  className: "w-8"
}

export default Days;
