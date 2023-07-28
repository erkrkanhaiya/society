import React, { Fragment } from "react";
import styled from 'styled-components';
import ScreenHeading from "@/Components/atoms/ScreenHeading";
import { Button, Pressable } from "react-native";

const MoodBoxQuestion = ({ qData, index, handleChange, moodScores }) => {
    const optionsRev = [...qData.answers].reverse();
    return (
        <Fragment>
            <ScreenHeading text={(index + 1) + ". " + qData.question} />
            {optionsRev?.map((val, ind) => (
                <OptionBtn
                    key={((val?.title)).toString()}
                >
                    <Button
                        onPress={() => handleChange(index, ind + 1)}
                        title={val?.title}
                        color={moodScores[index]?.score === ind + 1 ? '#c9c5c5' : '#491F69'}
                    />
                </OptionBtn>
            ))}
        </Fragment>
    );
};

const OptionBtn = styled(Pressable)`
  margin: 5px 50px;
  font-size: 16px;
  color: red;
  font-size: 16px;
  border: 1px solid #9d9d9d;
  font-weight: ${({ theme }) => theme.fontBold};
  margin-bottom: ${({ theme }) => theme.spacingSm};
`

export default MoodBoxQuestion;