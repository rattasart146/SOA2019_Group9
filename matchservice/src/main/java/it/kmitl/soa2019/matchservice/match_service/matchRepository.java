package it.kmitl.soa2019.matchservice.match_service;

import it.kmitl.soa2019.matchservice.match_service.match.Match;
import org.springframework.data.repository.CrudRepository;


public abstract class matchRepository implements CrudRepository<Match, Integer> {
    void findMatchById(int id) {

    }
}
