import React, { Component } from 'react';
import Form from '../commons/Form';
import Header from '../commons/Header'

const inputFields = [
{
  name: 'title',
  type: 'text',
  placeholder: 'Enter book title'
},
{
  name: 'author',
  type: 'text',
  placeholder: 'Enter name of author'
},
{
  name: 'publisher',
  type: 'text',
  placeholder: 'Enter name of publisher'
}, 
{
  name: 'image',
  type: 'url',
  placeholder: 'Upload image'
}
];

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
      const { title, author, publisher, url } = this.state;
      const formData = {
          title,
          author,
          publisher,
          url
      };
  }
}

render(){
  return (
    <>
      <Form 
          formTitle='Create Book'
          inputFields={inputFields}
          buttonTitle='create'
          onChange={this.onChange}
          onSubmit={this.onSubmit}
      />
    </>

  )
}
}

export default CreateBook;