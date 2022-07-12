import { IonCard, IonCardSubtitle, IonCardTitle } from "@ionic/react";
import UseApi from "./UseApi";

const ShowComponent = (path:any) => {
    const {data} = UseApi(`${process.env.REACT_APP_API_URL}/contents`);
    if(!data||data.length ===0) return <h1>No content</h1>
    return (
        <ul>
            {data.map((content:any) =>{
                return(
                    <IonCard key={content.id}>
                        <IonCardTitle>{content.name}</IonCardTitle>
                        <IonCardSubtitle>{content.description}</IonCardSubtitle>
                    </IonCard>
                )
            })}
        </ul>
    );
};

export default ShowComponent;