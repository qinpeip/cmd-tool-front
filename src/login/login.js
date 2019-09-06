import React from 'react';
import { Form, Input, Button} from 'element-react';
import './login.css';
import service from '../utils/request';
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        accountName: '',
        password: '',
        location: '',
        port: ''
      }
    };
    this.state.rules = {
      accountName: [
        {required: true, message: '请输入账号', trigger: 'blur'}
      ],
      password: [
        {required: true, message: '请输入密码', trigger: 'blur'}
      ],
      location: [
        {required: true, message: '请输入服务器地址', trigger: 'blur'}
      ],
      port: [
        {required: true, message: '请输入账号', trigger: 'blur'}
      ]
    };
  }
  render() {
    return (
      <div className="login-container">
      <Form model={this.state.form} rules={this.state.rules} ref="form" className="login-form" labelPosition="right" labelWidth="100px" onSubmit={() => false}>
      <div className="title-container">
        <h3 className="title">服务器登录</h3>
      </div>
        <Form.Item label="账号" prop="accountName">
        <Input value={this.state.form.accountName} onChange={this.onChange.bind(this, 'accountName')} placeholder="账号"></Input>
        </Form.Item>
        <Form.Item label="密码" prop="password">
        <Input value={this.state.form.password} onChange={this.onChange.bind(this, 'password')} type="password" placeholder="密码"></Input>
        </Form.Item>
        <Form.Item label="服务器地址" prop="location">
        <Input value={this.state.form.location} onChange={this.onChange.bind(this, 'location')} placeholder="服务器地址"></Input>
        </Form.Item>
        <Form.Item label="端口" prop="port">
        <Input value={this.state.form.port} onChange={this.onChange.bind(this, 'port')} placeholder="端口"></Input>
        </Form.Item>
        <Button type="primary" onClick={this.loginHandle.bind(this)}>登录</Button>
      </Form>
      </div>
    );
  }
  onChange(key, value) {
    this.state.form[key] = value;
    this.forceUpdate();
  }
  loginHandle(e, event) {
    e.preventDefault();
    console.log(e);
    this.refs.form.validate(valid => {
      if (valid) {
        service.post('/login', this.state.form).then(res => {
          console.log(res);
        })
      }
    });
    return false;
  }
}
