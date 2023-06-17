interface IResponseHandler<T> {
  (response: Response): Promise<T | null>;
}

const responseHandler: IResponseHandler<string> = async (response) => {
  try {
    const data = await response.json();

    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return data;
  } catch (err) {
    console.error(err);
  }
  return null;
};

export default responseHandler;
