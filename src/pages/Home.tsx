import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar
} from '@ionic/react'
import React from 'react'
import List from '../components/List'
import UseApi from '../components/useApi'
import './Home.css'

const Home: React.FC = () => {
  const url = process.env.REACT_APP_API_URL
  const { data } = UseApi(`${url}/contents`)

  if (!data) return <h1> Cargando...</h1>

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <List data={data} />
      </IonContent>
    </IonPage>
  )
}

export default Home
