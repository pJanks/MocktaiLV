import { fetchData } from './helperFunctions';

describe('FetchData', () => {


  beforeEach(() => {
    window.fetch = jest.fn(() => {
      return Promise.resolve({
        status: 200,
        ok: true,
        json: jest.fn()
      })
    })
  })

  it('should return a resolved response when successful', async () => {
    let response = await fetchData('www.fakeurl.com')
    await expect(response).toEqual({ status: 200, ok: true, json: jest.fn() })
  })

  it('should return an error when unsuccessful', async () => {
    let error = new Error('There was an error fetching data')
    window.fetch = jest.fn(() => {
      return Promise.resolve({
        status: 200,
        ok: false
      })
    })
    await expect(fetchData('www.fakeurl.com')).rejects.toEqual(error)
  })
})
