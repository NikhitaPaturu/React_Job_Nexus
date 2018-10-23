import React, { Component } from 'react';
import { Page } from '../../components'
import { Header, Grid, Button } from 'semantic-ui-react';
import './style.css';

class AccountPage extends Component {

  componentDidMount() {
    this.props.actions.getJobs();
  }

  handleJobDetailClick = (id) => {
    this.props.history.push(`/job/${id}`)
  }

  render() {
    const { authorized } = this.props.login;
    const { account: { jobData }, history } = this.props;
    return (
      <Page authorized={authorized} logoutHandler={this.props.actions.doLogout} history={history}>
        <Header size="huge" textAlign="center">Welcome to NEXUS</Header>
        <Header size="tiny" textAlign="center">Find your suitable job here with NEXUS because no job is too small, you don't know where it can LEAD</Header>
        {jobData && 
          <Grid columns='equal' padded="horizontally">
            <Grid.Row>
              <Grid.Column><Header size="tiny">S.No</Header></Grid.Column>
              <Grid.Column><Header size="tiny">Job Role/Type</Header></Grid.Column>
              <Grid.Column><Header size="tiny">Location</Header></Grid.Column>
              <Grid.Column><Header size="tiny">Posted By</Header></Grid.Column>
              <Grid.Column/>
            </Grid.Row>
            {jobData.data.map((job,i) => <Grid.Row verticalAlign="middle" key={`row${i}`}>
              <Grid.Column>{i + 1}</Grid.Column>
              <Grid.Column>{job.title}</Grid.Column>
              <Grid.Column>{job.location}</Grid.Column>
              <Grid.Column>{job.postedBy}</Grid.Column>
              <Grid.Column><Button positive onClick={() => this.handleJobDetailClick(job.id)}>View Details</Button></Grid.Column>
            </Grid.Row>)}
          </Grid>
        }
      </Page>
    );
  }
}

export default AccountPage;