import React from 'react';
import { StyledWeather, WeatherPreview, CheckboxParent } from './style';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import { useStore } from 'react-hookstore';
import useSWR from 'swr';
import { fetcher } from '../../utils/fetcher';
import { defaultWeatherSettings } from '../../widgets/Weather/defaultSettings';
import { WeatherIcon, WeatherWidget } from '../../widgets/Weather/style';
import { countryCodes } from '../../utils/countries';
import { calculateTemp } from '../../utils/temp';

const WeatherFailed = () => <p>Failed to get weather.</p>;

const WeatherLoading = () => <p>Loading...</p>;

const WeatherNotSetup = () => (
  <>
    <WeatherIcon icon={require('../../assets/weather/cloud.svg')} />
    <h1>-</h1>
    <p>Weather not set-up yet.</p>
  </>
);

const totalUnits = 3 - 1;
const units = [
  {
    value: 0,
    label: '°C'
  },
  {
    value: (100 / totalUnits) * 1,
    label: '°F'
  },
  {
    value: (100 / totalUnits) * 2,
    label: 'K'
  }
];

function valueLabelFormat(value: number) {
  return units.find((mark: any) => Math.trunc(mark.value) === Math.trunc(value))
    ?.label;
}

export const Weather = () => {
  const [settings, setSettings]: [
    typeof defaultWeatherSettings,
    any
  ] = useStore('weatherSettings');
  const [ready, setReady] = React.useState(false);

  const [stageCity, setStageCity] = React.useState('');
  const [stageCountry, setStageCountry] = React.useState('');

  const { data } = useSWR(
    settings.city && settings.country
      ? `https://compass-api.vercel.app/weather/${settings.city},${settings.country}`
      : ``,
    fetcher
  );

  React.useEffect(() => {
    window.addEventListener('DOMContentLoaded', () => {
      setSettings(
        localStorage.getItem('weatherSettings')
          ? JSON.parse(localStorage.getItem('weatherSettings') || '')
          : defaultWeatherSettings
      );
      setReady(true);
    });

    if (stageCity.length == 0) setStageCity(settings.city);
    if (stageCountry.length == 0) setStageCountry(settings.country);
  }, [settings]);

  const onWeatherSave = () => {
    if (stageCity.length == 0 || stageCountry.length == 0) return;

    setSettings({
      ...settings,
      city: stageCity,
      country: stageCountry,
      setup: true
    });
  };

  return (
    <StyledWeather style={{ paddingRight: '50px' }}>
      <WeatherPreview>
        <WeatherWidget>
          {!data && ready && !settings.setup && <WeatherNotSetup />}
          {!data && settings.setup && <WeatherLoading />}
          {data && !data.main && <WeatherFailed />}
          {data && data.main && (
            <>
              <WeatherIcon icon={require('../../assets/weather/cloud.svg')} />
              <h1>
                {data ? calculateTemp(data.main.temp, settings.unit) : `-`}
              </h1>
              <p>
                {data.name ? data.name : settings.city},{' '}
                {data.sys.country && countryCodes[data.sys.country]
                  ? countryCodes[data.sys.country]
                  : settings.country}
              </p>
            </>
          )}
        </WeatherWidget>
      </WeatherPreview>

      <CheckboxParent>
        <span>City</span>
        <TextField
          value={stageCity}
          placeholder={'City'}
          variant="outlined"
          size="small"
          error={stageCity.length == 0}
          onChange={(e: any) => setStageCity(e.target.value)}
        />
      </CheckboxParent>

      <CheckboxParent>
        <span>Country</span>
        <TextField
          value={stageCountry}
          placeholder={'Country'}
          variant="outlined"
          size="small"
          error={stageCountry.length == 0}
          onChange={(e: any) => setStageCountry(e.target.value)}
        />
      </CheckboxParent>

      <div className={'button-box'}>
        <Button
          color="primary"
          variant="contained"
          onClick={() => onWeatherSave()}
        >
          Save location
        </Button>
      </div>

      <CheckboxParent>
        <span>Temperature units</span>
        <div style={{ width: '150px' }}>
          <Slider
            value={(100 / totalUnits) * settings.unit}
            valueLabelFormat={valueLabelFormat}
            valueLabelDisplay="auto"
            marks={units}
            step={null}
            onChange={(e: any, val: any) =>
              setSettings({
                ...settings,
                unit: units.findIndex(
                  (i) => Math.trunc(i.value) == Math.trunc(val)
                )
              })
            }
          />
        </div>
      </CheckboxParent>
    </StyledWeather>
  );
};
