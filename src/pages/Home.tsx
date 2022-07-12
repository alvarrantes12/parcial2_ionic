import React from "react";
import{
    IonPage,
    IonHeader,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonContent,
    IonButton,
    IonTitle,
} from "@ionic/react"
import List from "../components/List";
import UseApi from "../components/UseApi";


const Home: React.FC = () => {
    const {data, refetch} = UseApi(`${process.env.REACT_APP_API_URL}/contents`);
    if(!data){
        return <h1>Cargando......</h1> 
    }else{
        return(<IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        Ionic Contenidos
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <List data={data}/>
            </IonContent>
        </IonPage>)
    }
};

export default Home;