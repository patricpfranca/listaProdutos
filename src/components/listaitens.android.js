import React, { Component } from 'react';
import { Text } from 'react-native';

export default class ListaItens extends Component {

  constructor(props) {
    super(props);
    console.log('Construindo...');
  }

  componentWillMount() {
    console.log('Fazer algo antes de renderizar');
  }

  componentDidMount() {
    console.log('depois de renderizar');
  }

  render() {
    console.log('renderizado');
    return (
      <Text>Importação de componente</Text>
    );
  }
}
