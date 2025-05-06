import React,{Component} from "react";
import factory from '../ethereum/factory';
import {Card,Button} from 'semantic-ui-react';
import Layout from '../components/Layout';
import{Router} from '../routes';
class CampaignIndex extends Component{
    static async getInitialProps(){
        const campaigns= await factory.methods.getCampaigns().call();
        return {campaigns }; 
    }
    renderCampaigns(){
        const items = this.props.campaigns.map(address=>{
            return{
                header: address,
                description: <a>View Campaign</a>,
                fluid : true // extends the card
            }
        });
        return <Card.Group items = {items} />
    }
    handleCreateCampaign = ()=>{
        Router.pushRoute('/campaigns/new');
    }
    render(){

        return (
            <Layout>
        <div>
        <h3>Open Campaigns</h3>
        <Button style ={{marginTop:'8px'}}floated="right" 
        content="Create Campaign"
        icon ="add circle"
        primary
        onClick={this.handleCreateCampaign}
        />
        {this.renderCampaigns()}
      </div>
    </Layout>
    );
}

}
export default CampaignIndex;