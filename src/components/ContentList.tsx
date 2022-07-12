import {
	IonCard,
	IonLabel,
	IonButton,
	IonCardContent,
	IonCardHeader,
	IonCardTitle,
} from "@ionic/react";
import React from "react";

const ContentList = ({ content, method }: any) => {
	if (!content) {
		return (
			<IonCard>
				<IonLabel>Cargando...</IonLabel>
				<IonButton onClick={method}>Refresh</IonButton>
			</IonCard>
		);
	} else {
		return (
			<IonCard>
				<IonCardContent>
					{content?.map((content: any) => {
						return (
							<IonCard>
								<IonCardHeader>
									<IonCardTitle>{content?.name}</IonCardTitle>
								</IonCardHeader>
								<IonCardContent>{content.description}</IonCardContent>
							</IonCard>
						);
					})}
					<IonButton onClick={method}>Refresh</IonButton>
				</IonCardContent>
			</IonCard>
		);
	}
};

export default ContentList;
