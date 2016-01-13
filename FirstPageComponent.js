


'use strict';
var React = require('react-native');
var {
    View,
    Text,
    TouchableOpacity
    } = React;

var SecondPage = require('./SecondPageComponent');

var FirstPageComponent = React.createClass({
    getInitialState: function() {
        return {
          id:85,
        };
    },
    componentDidMount: function() {
    },
    _pressButton: function() {
        //const { navigator } = this.props;
        const nvi = this.props.navigator;
        //为什么这里可以取得 props.navigator?请看上文:
        //<Component {...route.params} navigator={navigator} />
        //这里传递了navigator作为props
        if(nvi) {
            nvi.push({
                name: 'SecondPage',
                component: SecondPage,
                params:{
                  id:this.state.id
                }
            })
        }
    },

    render: function() {
        return (
            <View>
                <TouchableOpacity onPress={this._pressButton} style={{width: 1000, height: 400, backgroundColor: '#000000'}}>
                    <Text style={{color:'blue'}}>点我跳转并传递ID</Text>
                </TouchableOpacity>
            </View>
        );
    }
});
module.exports = FirstPageComponent;
