import React from "react";
import { IonPage, IonHeader,IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonContent,  IonTitle } from '@ionic/react';
import UseApi from "../../components/UseApi";
import './home.css'
import GetCont from "../../components/GetCont";

const Home: React.FC = () => {
    const { data} = UseApi(`${process.env.REACT_APP_API_URL}/contents`);
    if (!data) {

        return <h1>loading...</h1>
    } else {
        return (<IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonHeader>
                        <IonTitle>
                          List
                        </IonTitle>

                    </IonHeader>
                </IonToolbar>
            </IonHeader>
            <GetCont></GetCont>

        
        </IonPage>
        )
    };
}
export default Home;