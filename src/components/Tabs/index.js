import React from "react";
import { MaterialIcons } from '@expo/vector-icons'; 
import { Container, TabsContainer, TabText, TabItem } from "./styles"


export default function Tabs() {
    return (
        <Container>
            <TabsContainer>
                <TabItem>
                    <MaterialIcons name="person-add" size={24} color="#fff"/>
                    <TabText>Indicar amigos</TabText>
                </TabItem>
                <TabItem>
                    <MaterialIcons name="chat-bubble-outline" size={24} color="#fff"/>
                    <TabText>Cobrar</TabText>
                </TabItem>
                <TabItem>
                    <MaterialIcons name="arrow-downward" size={24} color="#fff"/>
                    <TabText>Depositar</TabText>
                </TabItem>
                <TabItem>
                    <MaterialIcons name="arrow-upward" size={24} color="#fff"/>
                    <TabText>Transferir</TabText>
                </TabItem>
                <TabItem>
                    <MaterialIcons name="lock" size={24} color="#fff"/>
                    <TabText>Bloquear cartão</TabText>
                </TabItem>
            </TabsContainer>
        </Container>
    );
}