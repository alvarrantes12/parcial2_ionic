import React from 'react';
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardContent,
    IonContent,
    IonButton,
    IonTitle
} from '@ionic/react';
import UseApi
 from '../../components/UseApi';



const Home: React.FC = ()=>{
    const{data,refetch}= UseApi(`${process.env.REACT_APP_API_URL}/contents`);
    
    if(!data){
        return <h1>Loading...</h1>
    }else{
        return(
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>
                            Contents List
                        </IonTitle>    
                  </IonToolbar>
                </IonHeader>
                <IonContent>
                    {data?.map((content: any)=>{
                        return (
                            <IonCard key={content.id}>
                    
                                <IonCardHeader>
                                    <IonCardSubtitle>Name: {content?.name}</IonCardSubtitle>  
                                    <IonCardContent>Description: {content?.description}</IonCardContent>
                                </IonCardHeader>
                                
                            </IonCard>
                        )
                    
                    })}
                    
                    <IonButton onClick={refetch} color="light" expand="block" >
                        Refresh
                    </IonButton>
                </IonContent>
                
            </IonPage>
        )
    }
    
   

};

export default Home;