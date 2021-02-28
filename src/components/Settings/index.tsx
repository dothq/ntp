import { timingSafeEqual } from 'crypto';
import React, { useState } from 'react';
import {
  StyledSettingsBackground,
  StyledSettingsH2,
  StyledSettingsInnerBacksheet,
  StyledSettingsP,
  StyledLeftSide
} from './styles';

const Settings = (props) => {
  return (
    <div style={props.a}>
      <StyledLeftSide
        onClick={() => {
          props.ac({ display: 'none' });
        }}
      ></StyledLeftSide>
      <StyledSettingsBackground>
        <StyledSettingsInnerBacksheet>
          <StyledSettingsH2>Theme</StyledSettingsH2>
          <Themeswitcher></Themeswitcher>
          <StyledSettingsH2>Background</StyledSettingsH2>
          <Backgroundswitcher></Backgroundswitcher>
          <StyledSettingsH2>Clock</StyledSettingsH2>
          <Clocksettings></Clocksettings>
          <StyledSettingsH2>Weather</StyledSettingsH2>
          <Weathersettings></Weathersettings>
        </StyledSettingsInnerBacksheet>
      </StyledSettingsBackground>
    </div>
  );
};

export const opentheDrawer = (a = true) => {
  if (a == true) {
    setOpen({});
  } else {
    setOpen({ display: 'none' });
  }
};

const Themeswitcher = () => {
  return <a>ThemeSwitcher</a>;
};

const Backgroundswitcher = () => {
  return <a>BackgroundSwitcher</a>;
};

const Clocksettings = () => {
  return (
    <>
      <label htmlFor="cm1"> Use 24-hour time </label>
      <input
        type="checkbox"
        style={{ border: '2px solid #B6B6B6' }}
        className=""
        id="cm1"
        name="cm1"
      ></input>
      <br></br>
      <label htmlFor="cm2"> Show Date </label>
      <input
        type="checkbox"
        style={{ border: '2px solid #B6B6B6' }}
        className=""
        id="cm2"
        name="cm12"
      ></input>
    </>
  );
};

const Weathersettings = () => {
  return (
    <>
      <p>Temperature unit</p>
      <p>Location</p>
    </>
  );
};

export default Settings;
