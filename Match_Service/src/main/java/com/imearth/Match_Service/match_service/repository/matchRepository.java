package com.imearth.Match_Service.match_service.repository;

import com.imearth.Match_Service.match_service.model.Match;
import org.springframework.data.repository.CrudRepository;

public interface matchRepository extends CrudRepository<Match, Integer > {
    Match findMatchById(int id);
}
