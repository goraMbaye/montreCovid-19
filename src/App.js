import React from 'react';
import {Cards,Chart, CountryPicker} from './components';
import styles from'./App.module.css';
import {fetchData} from './api';
import coronaImage from './images/logo.jpg'


class App extends React.Component{
  state={
      data:{},
      country:'',
  }
  
    async componentDidMount(){
        const fetchedData = await fetchData();
       
        this.setState({ data: fetchedData});
        
    }
    handleContryChange=async (country)=>{
        const  fetchedData = await fetchData(country);
        this.setState({ data: fetchedData,country:country});
       
    }

    render(){
        const{data}=this.state;
        return(
            <div className={styles.container}> 
                 <img  className={styles.image} src={coronaImage} alt="COVID-19"/>
                <Cards data={data}/>
                <CountryPicker  handleContryChange={this.handleContryChange}/>
                <Chart />


            </div>
        )

    }
}
export default App;