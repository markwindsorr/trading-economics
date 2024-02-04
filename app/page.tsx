"use client"

import { useEffect, useState } from 'react'


import { Stack, Typography } from "@mui/material";
import { ChartComponent } from "./components/ChartComponent";
import { DropdownSelect } from './components/DropdownSelect'

// Add more countries here, not sure what else is available on the free tier
const options = [
  { label: 'Mexico', value: 'mexico' },
  { label: 'Thailand', value: 'thailand' },
  { label: 'Sweden', value: 'sweden' },

];

import axios from 'axios';
const api_key = 'ac9849e55ad9416:ldfw5nrezj7fdrt'


export default function Home() {


  const [currentCountry, setCurrentCountry] = useState("mexico")
  const [loading, setLoading] = useState(true)


  const [gdp, setGDP] = useState()
  const [pop, setPop] = useState()

  useEffect(() => {

    const fetchData = async () => {
      await fetchGDP()
      await fetchPop()
      setLoading(false)
    }
    fetchData()
  }, [currentCountry])

  const handleSelectChange = (selectedValue) => {
    console.log('Selected Option:', selectedValue);
    setCurrentCountry(selectedValue)
  };

  const fetchGDP = async () => {
    const response = await axios.get(`https://api.tradingeconomics.com/historical/country/${currentCountry}/indicator/gdp?c=${api_key}`)
    const chartData = {
      x: response.data.map(item => item.DateTime),
      y: response.data.map(item => item.Value).filter(item => item !== 0)
    }
    console.log(chartData)
    setGDP(chartData)
  }

  const fetchPop = async () => {
    const response = await axios.get(`https://api.tradingeconomics.com/historical/country/${currentCountry}/indicator/population?c=${api_key}`)
    const chartData = {
      x: response.data.map(item => item.DateTime),
      y: response.data.map(item => item.Value).filter(item => item !== 0)
    }
    console.log(chartData)
    setPop(chartData)
  }

  return (
    <main className="flex min-h-screen flex-col center-items  justify-between p-12">
      <Stack direction="row" spacing={2} justifyContent="space-between" sx={{ paddingBottom: -10 }}>
        <Typography variant='h4' >
          {"Mark Windsor's Trading Economics"}
        </Typography>
        <DropdownSelect
          options={options}
          label="Select an option"
          onSelectChange={handleSelectChange}
          selectedValue={currentCountry}
        />
      </Stack>

      {
        !loading ? <Stack sx={{ marginLeft: -2 }}>
          <Stack direction="horizontal">
            <ChartComponent chartData={gdp} title={`${currentCountry} GDP`.toUpperCase()} />
            <ChartComponent chartData={pop} title={`${currentCountry} Population`.toUpperCase()} />
            <ChartComponent chartData={pop} title={`${currentCountry} Population`.toUpperCase()} />
          </Stack>
          <Stack direction="horizontal" >
            <ChartComponent chartData={gdp} title={`${currentCountry} GDP`.toUpperCase()} />
            <ChartComponent chartData={pop} title={`${currentCountry} Population`.toUpperCase()} />
            <ChartComponent chartData={pop} title={`${currentCountry} Population`.toUpperCase()} />
          </Stack>
        </Stack> : null
      }


    </main >
  );
}
