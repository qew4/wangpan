'use strict';

var React = require('react-native');

var {
    View,
    Text,
    TouchableOpacity,
} = React;

var FirstPageComponent = require('./FirstPageComponent');

var SecondPageComponent = React.createClass({
    getInitialState: function() {
        return {
          id: null
        };
    },
    componentDidMount: function() {
      this.setState({
        id:this.props.id
      });
    },
    _pressButton: function() {
        const { navigator } = this.props;
        if(navigator) {
            //很熟悉吧，入栈出栈~ 把当前的页面pop掉，这里就返回到了上一个页面:irstPageComponent了
            navigator.pop();
        }
    },

    render: function() {
      return (
        <View>
            <Text>获得的参数: id={this.state.id}</Text>
            <TouchableOpacity onPress={this._pressButton} style={{width: 1000, height: 400, backgroundColor: 'red'}}>
                <Text>点我跳回去</Text>
            </TouchableOpacity>
        </View>
      );
    }
});
module.exports = SecondPageComponent;
