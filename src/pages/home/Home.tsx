import React from "react";
import {
    IonPage, //para especiifcar que es una pagina
    IonHeader, //parte de arriba
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonContent,
    IonButton,
    IonTitle,
    IonInput
} from "@ionic/react"
import UseApi from "../../components/UseApi";
import "./Home.css";

const Home: React.FC = () => {
    const {data} = UseApi(`${process.env.REACT_APP_API_URL}/contents`);

    if(!data){
        return <h1>Cargando...</h1>
    }else{
        return(    
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle> 
                        Ejemplo Ionic
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                {data?.map((content: any) => {
                    return (
                        <IonCard className="Content_Color" key={content.id}>
                        <IonCardHeader>
                            <IonCardSubtitle className="Content_Category">Nombre: {content?.name} | Descripcion: {content?.description} | Id: {content?.id}</IonCardSubtitle>
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