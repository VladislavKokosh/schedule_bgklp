import React, { useState, FC} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { LOADING } from '../../../../image';
import { selectTeacherAsync } from '../../../../store/actions/teachers';
import { selectTeacherSelector } from '../../../../store/selectors/teachers';

interface IDiscipline {
  time: string
  name: string
  teacher: string
  link?: string
  cabinet: string
}

interface IProps {
  discipline: IDiscipline
}

const Discipline:FC<IProps> = ({ discipline }) => {
  const dispatch = useDispatch();
  const [visableModal, setVisableModal] = useState('none')
  const selectTeacher = useSelector(selectTeacherSelector)

  const Change = () => {
    dispatch(selectTeacherAsync(discipline.teacher))
    setVisableModal('flex')
  }

  const reChange = () => {
    setVisableModal('none')
  }

  return(
    <div className='day__discipline'>
        <div className='day__discipline_time'>
          {discipline.time}
        </div>
        <div className='day__discipline_name'>
          {discipline.name}
        </div>
        <div
          className='day__discipline_teacher'
          onMouseEnter = {() => Change()}
          onMouseLeave={() => reChange()}
        >
          {discipline.teacher}
          <div
            className='day__discipline_teacher-about'
            style={{display: visableModal}}
          >
            <img
              style={selectTeacher?.img ? {width:'120px', height: '150px'} : {width:'100px', height: '100px'}}
              src={selectTeacher?.img ? selectTeacher.img : LOADING}
              alt=''
            />
            {selectTeacher != null ? selectTeacher.about : 'Загрузка...'}
          </div>
        </div>
        <div className='day__discipline_cabinet'>
          {discipline.cabinet}
        </div>
    </div>
  )
}

export default Discipline
