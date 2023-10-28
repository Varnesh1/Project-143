import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import * as React from 'react';
import { Header, AirbnbRating, Icon } from 'react-native-elements';
import axios from 'axios';
import {RFvalue} from 'react-native-responive-fontsize';

export default class Home extends React.Component{
    constructor(){
        super()
        this.state = {
            articles : {}
        }

    }

    componentDidMount=()=>{
        this.articles()
    }
    articles=()=>{
        const url = 'http://127.0.0.1:5000/articles'
        axios.get(url).then((response)=>{
            let details = response.data.data
            this.setState({articles:details})
        }
        
        )
        .catch((error)=>{console.log(error.message)})
    }

    }
    likedmovies=()=>{
        const url = 'http://127.0.0.1:5000/liked'
        axios.post(url).then((response)=>{
            this.articles()
        }
        
        )
        .catch((error)=>{console.log(error.message)})        

    }
    
    unlikedmovies=()=>{
        const url = 'http://127.0.0.1:5000/unliked'
        axios.post(url).then((response)=>{
            this.articles()
        }
        
        )
        .catch((error)=>{console.log(error.message)})        

    }
    render(){
        return(
            <View/>
        )
    }      
}