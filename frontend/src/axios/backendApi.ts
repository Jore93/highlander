import axios from 'axios';

export default class BackendAPI {
  private makePostRequest = async (url: string, data: Record<string, string | boolean>) => {
    const config = {};
    try {
      const res = await axios.post(url, data, config);
      return {
        status: res?.status,
        ok: res?.data?.ok || false,
        data: res?.data?.data || null,
      };
    } catch (err) {
      console.error(err);
      return {
        status: err?.status,
        ok: false,
        data: err?.data
      };
    }
  }

  create = async (endpointGroup: string, body: Record<string, string | boolean>) => {
    const url = `${process.env.REACT_APP_API}/${endpointGroup}/create`;
    try {
      return await this.makePostRequest(url, body);
    } catch (err) {
      console.error(err);
    }
  }

  read = async (endpointGroup: string, body: Record<string, string | boolean>) => {
    const url = `${process.env.REACT_APP_API}/${endpointGroup}/read`;
    try {
      return await this.makePostRequest(url, body);
    } catch (err) {
      console.error(err);
    }
  }

  update = async (endpointGroup: string, body: Record<string, string | boolean>) => {
    const url = `${process.env.REACT_APP_API}/${endpointGroup}/update`;
    try {
      return await this.makePostRequest(url, body);
    } catch (err) {
      console.error(err);
    }
  }

  delete = async (endpointGroup: string, body: Record<string, string | boolean>) => {
    const url = `${process.env.REACT_APP_API}/${endpointGroup}/delete`;
    try {
      return await this.makePostRequest(url, body);
    } catch (err) {
      console.error(err);
    }
  }
}
