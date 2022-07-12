import React from "react";
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonContent,
    IonButton,
    IonTitle
} from "@ionic/react";
import UseApi from "../../components/List";
import "./Home.css";

const Home: React.FC = () => {
    const {data} = UseApi(`${process.env.REACT_APP_API_URL}/contents`);
    
    if (!data) {
        return <h1>Cargando...</h1>
    }else {
        return ( 
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>
                            Ejemplo ionic
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                {data?.map((contents: any) =>{
                        return (
                            <IonCard className="Content_Card " key={contents.id}>
                                <IonCardHeader>
                                    <IonCardSubtitle className="Content_Attribute">Nombre del contenido: {contents?.name}</IonCardSubtitle>
                                    <IonCardSubtitle className="Content_Attribute">Descripcion del contenido: {contents?.description}</IonCardSubtitle>
                                </IonCardHeader>
                            </IonCard>
                        )
                    })}
                </IonContent>
            </IonPage>
        )
    }   
};

export default Home;