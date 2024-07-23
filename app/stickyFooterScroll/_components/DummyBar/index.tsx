import { LayoutChangeEvent, View } from "react-native";

interface Props {
  onLayout: (e: LayoutChangeEvent) => void;
}

const DummyBar = ({ onLayout }: Props) => {
  return (
    <View
      style={{
        width: "100%",
        height: 50,
        marginVertical: 16,
      }}
      onLayout={onLayout}
    />
  );
};

export default DummyBar;
