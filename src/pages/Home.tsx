import { IonContent } from '@ionic/react';
import React from 'react'
import ContentList from '../components/ContentList';
import UseApi from '../components/UseApi';

const Home = () => {
  const url = `${process.env.REACT_APP_API_URL}/contents`
  const {data, refetchMethod} = UseApi(url);

  return (
    <IonContent>
      <ContentList content={data} method={refetchMethod}/>
    </IonContent>
  );
}

export default Home;