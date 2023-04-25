import { styled } from "@macaron-css/react";
import { useState } from "react";

const TopPage = () => {

  const buttons: colorKey[] = ['blue','gray', 'violet', 'blue','gray', 'violet'];

  return (
    <ButtonContainer>
      {buttons.map((color) => {
        return <TestButton color={color} />
      })}
    </ButtonContainer>
  )
};

export default TopPage;

const TestButton = ({ color }: {
  color : colorKey
}) => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <Button clicked={checked} backgroundColor={color} onClick={() => setChecked(current => !current)}>
      Test1
    </Button>
  );
};

const ButtonContainer = styled('main', {
  base: {
    width: '400px',
    display: 'flex',
    gap: '8px'
  }
})

const variantBackgroundColors = {
  violet: { backgroundColor: "blueviolet" },
  gray: { backgroundColor: "gainsboro" },
  blue: { backgroundColor: "blue" },
}

type typeOfVariantBackgroundColors = typeof variantBackgroundColors;
type colorKey = keyof typeOfVariantBackgroundColors;

const Button = styled('button', {
  base: {
    color: '#fff',
    backgroundColor: '#ccc',
    borderRadius: '8px',
    fontSize: '13px',
    padding: '10px 15px',
    ':hover': {
      opacity: 0.75,
    },
  },

  variants: {
    backgroundColor: variantBackgroundColors,
    clicked: {
      true: { display: "none" },
    },
  },
});

