import React, { Component } from 'react';
import Form from '../../commons/Form';
import PageTemplate from '../../commons/PageTemplate';
import inputFields from './formData';

class CreateBook extends Component {
  constructor(props){
    super(props);
    this.state = {
      title:  '',
      author: '',
      publisher: '',
      image: ''
    }

    this.onChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    this.onSubmit = (event) => {
      event.preventDefault();
      const { title, author, publisher, image } = this.state;
      const formData = {
          title,
          author,
          publisher,
          image
      };
    }
  }

  render(){
    return (
      <PageTemplate>
        <Form 
          formTitle='Create Book'
          inputFields={inputFields}
          buttonTitle='create'
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
      </PageTemplate>
    )
  }
}

export default CreateBook;
