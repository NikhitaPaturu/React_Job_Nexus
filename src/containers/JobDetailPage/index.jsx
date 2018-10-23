import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import find from 'lodash/find';
import { Page } from '../../components'

class JobDetailPage extends Component {

  getJobData = () => {
    const { account: { jobData }, match: { params } } = this.props;
    let data;
    if (jobData) {
        data = find(jobData.data, ['id', parseInt(params.id, 0)]);
    }
    return data;
  }  

  render() {
      const { login: { authorized }, history } = this.props;
      const data = this.getJobData();
    return (
        <Page authorized={authorized} logoutHandler={this.props.actions.doLogout}  history={history}>
            <Header size="huge" textAlign="center">{data.title}</Header>
            <div className="job_description" dangerouslySetInnerHTML={{__html: data.description}}></div>
        </Page>
    )
  }
}

export default JobDetailPage;