import React from 'react';
import {
  BackgroundImage,
  BackgroundItem,
  StyledBackgrounds,
  BackgroundSelected,
  CheckboxParent,
  BackgroundsContainer,
  ColourPicker
} from './style';
import OutsideClickHandler from 'react-outside-click-handler';

import solid from '../../assets/settings/backgrounds/solid.png';
import { useStore } from 'react-hookstore';

import ReactGPicker from 'react-gcolor-picker';

const SolidSettings = ({
  defaultColour,
  colourChange
}: {
  defaultColour: string;
  colourChange: any;
}) => {
  const colourRef = React.createRef<HTMLButtonElement>();

  const [colour, setColour] = React.useState(defaultColour);
  const [colourOpen, setColourOpen] = React.useState(false);

  const [bubblePos, setBPos] = React.useState([0, 0]);

  let scrollInt: any;

  const onClickColourPicker = () => {
    setColourOpen(!colourOpen);
  };

  const onChange = (newValue: any) => {
    setColour(newValue);
    colourChange(newValue);
  };

  React.useEffect(() => {
    const { y }: any = colourRef.current?.getBoundingClientRect();

    setBPos([-50, y + 34]);
  }, [colourOpen]);

  return (
    <>
      <CheckboxParent>
        <span>Select colour</span>
        <OutsideClickHandler
          disabled={!colourOpen}
          onOutsideClick={() => {
            setColourOpen(false);
          }}
        >
          <ColourPicker
            ref={colourRef}
            colour={colour}
            onClick={() => onClickColourPicker()}
          />
          <div
            style={{
              display: colourOpen ? '' : 'none',
              transform: `translate(${bubblePos[0]}px, ${bubblePos[1]}px)`,
              position: 'fixed',
              top: 0,
              right: 0,
              zIndex: 199
            }}
          >
            <ReactGPicker value={colour} onChange={onChange} />
          </div>
        </OutsideClickHandler>
      </CheckboxParent>
    </>
  );
};

export const Backgrounds = () => {
  const uploadRef = React.createRef<HTMLInputElement>();

  const [settings, setSettings]: [
    { provider: string; colour?: string },
    any
  ] = useStore('backgroundSettings');

  const onChangeProvider = (provider: string) => {
    setSettings({ ...settings, provider });
  };

  const onChangeColour = (newValue: string) => {
    setSettings({ ...settings, colour: newValue });
  };

  const onUploadClick = () => {
    uploadRef?.current?.click();
  };

  return (
    <StyledBackgrounds>
      <BackgroundsContainer>
        <BackgroundItem
          selected={settings.provider == 'unsplash'}
          onMouseUp={() => onChangeProvider('unsplash')}
        >
          <BackgroundImage
            src={require('../../assets/settings/backgrounds/unsplash.svg')}
          />
          <p>Unsplash</p>
          <BackgroundSelected />
        </BackgroundItem>

        <BackgroundItem
          selected={settings.provider == 'solid'}
          onMouseUp={() => onChangeProvider('solid')}
        >
          <BackgroundImage src={solid} />
          <p>Solid Colour</p>
          <BackgroundSelected />
        </BackgroundItem>

        <BackgroundItem
          selected={false}
          noHover={true}
          onMouseUp={() => onUploadClick()}
        >
          <BackgroundImage
            src={require('../../assets/settings/backgrounds/upload.svg')}
          />
          <p>Upload a picture</p>
          <BackgroundSelected />
        </BackgroundItem>

        <input type="file" style={{ display: 'none' }} ref={uploadRef}></input>
      </BackgroundsContainer>

      {settings.provider == 'solid' && (
        <SolidSettings
          colourChange={onChangeColour}
          defaultColour={
            !settings.colour || settings.colour.length == 0
              ? '#2554e1'
              : settings.colour
          }
        />
      )}
    </StyledBackgrounds>
  );
};
