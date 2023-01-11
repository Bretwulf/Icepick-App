import React, { useContext, useEffect, useState } from "react";
import { sentenceContext } from "../../contexts/sentenceContext/sentenceContext";
import { useUsers } from "../../hooks/useUsers";
import { iSentences } from "../../types/types";
import MiniCard from "./card/card";
import { StyledFilterSection } from "./styledComponents";

interface iFilterSection {
  page: "home" | "profile";
}

const FilterSection = ({ page }: iFilterSection) => {
  const { sentences, renderFilterAndSearchSentences, filtradedSentences } =
    useContext(sentenceContext);
  const { user } = useUsers();
  const { profileSentences, setProfileSentences } = useContext(sentenceContext);
  useEffect(() => {
    if (page === "profile") {
      const sentencesCreated = sentences.filter(
        (sentence) => sentence.userId === user?.id
      );
      setProfileSentences([...sentencesCreated]);
    }
  }, [sentences, profileSentences]);

  return (
    <StyledFilterSection>
      {page === "home" ? (
        <div>
          <div>
            <button
              type="button"
              id="buttonLi"
              onClick={(e) =>
                renderFilterAndSearchSentences("", e.currentTarget.innerHTML)
              }
            >
              Todas
            </button>
            <button
              type="button"
              id="buttonLi"
              onClick={(e) =>
                renderFilterAndSearchSentences("", e.currentTarget.innerHTML)
              }
            >
              Formal
            </button>
            <button
              type="button"
              id="buttonLi"
              onClick={(e) =>
                renderFilterAndSearchSentences("", e.currentTarget.innerHTML)
              }
            >
              Engraçada
            </button>
            <button
              type="button"
              id="buttonLi"
              onClick={(e) =>
                renderFilterAndSearchSentences("", e.currentTarget.innerHTML)
              }
            >
              Paquera
            </button>
            <button
              type="button"
              id="buttonLi"
              onClick={(e) =>
                renderFilterAndSearchSentences("", e.currentTarget.innerHTML)
              }
            >
              Criativas
            </button>
            <button
              type="button"
              id="buttonLi"
              onClick={(e) =>
                renderFilterAndSearchSentences("", e.currentTarget.innerHTML)
              }
            >
              Pessoal
            </button>
            <button
              type="button"
              id="buttonLi"
              onClick={(e) =>
                renderFilterAndSearchSentences("", e.currentTarget.innerHTML)
              }
            >
              Curiosidade
            </button>
            <button
              type="button"
              id="buttonLi"
              onClick={(e) =>
                renderFilterAndSearchSentences("", e.currentTarget.innerHTML)
              }
            >
              Intimidade
            </button>
          </div>
          {filtradedSentences.length > 0 ? (
            <ul>
              {filtradedSentences.map((sentence: iSentences) => (
                <MiniCard
                  type="favorite"
                  sentence={sentence}
                  key={sentence.id}
                />
              ))}
            </ul>
          ) : (
            <div>
              <h2>Ainda não existem frases cadastradas nesta categoria</h2>
            </div>
          )}
        </div>
      ) : (
        <StyledFilterSection>
          <div>
            <div>
              <button
                type="button"
                id="buttonLi"
                onClick={(e) => console.log(e.currentTarget.innerHTML)}
              >
                Todas
              </button>
              <button
                type="button"
                id="buttonLi"
                onClick={(e) => console.log(e.currentTarget.innerHTML)}
              >
                Favoritas
              </button>
              <button
                type="button"
                id="buttonLi"
                onClick={(e) => console.log(e.currentTarget.innerHTML)}
              >
                Criadas
              </button>
            </div>
            <ul>
              {profileSentences.map((sentence: iSentences) => (
                <MiniCard type="created" sentence={sentence} />
              ))}
            </ul>
          </div>
        </StyledFilterSection>
      )}
    </StyledFilterSection>
  );
};
export default FilterSection;
