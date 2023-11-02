import { createStore } from 'redux';
import rootReducer from './reducers'; // Import root reducer

const store = createStore(rootReducer);


const addData = (data) => ({
    type: 'ADD_DATA',
    payload: data,
  });

  
  // Contoh reducer
const dataReducer = (state = [], action) => {
    if (action.type === 'ADD_DATA') {
      return [...state, action.payload];
    }
    return state;
  };

  store.dispatch(addData({ id: 1, name: 'Contoh Data' }));

  import { connect } from 'react-redux';

const MyComponent = ({ data }) => {
  // Gunakan data dari Redux store di sini
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps)(MyComponent);
