import axios from "axios";
import {fetchItems} from "./fetchItems";

jest.mock('axios');
describe('tasks api', function(){
    test('should return items info when fetchItems called', async () => {
        //arrange
        const mockData = [{"id": "1", "name": "apple", "description": "here is an apple!"}];
        axios.get.mockResolvedValue({
            data: mockData
        });
        //act
        const result = await fetchItems();
        //assert
        expect(result).toEqual(mockData);
    })
})