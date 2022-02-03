package com.lucasmndca.mypcbuild.controllers;

import com.lucasmndca.mypcbuild.entities.Psu;
import com.lucasmndca.mypcbuild.repositories.PsuRepository;
import com.lucasmndca.mypcbuild.requests.CpuRequest;
import com.lucasmndca.mypcbuild.requests.PsuRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(path = "/psu")
public class PsuController {

    @Autowired
    private PsuRepository psuRepository;

    @GetMapping(path = "")
    private @ResponseBody Iterable<Psu> getAll() {
        return psuRepository.findAll();
    }

    @GetMapping(path = "/{id}")
    public @ResponseBody
    ResponseEntity<Psu> getPsu(@PathVariable Integer id) {
        try {
            return new ResponseEntity<>(psuRepository.findById(id).get(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping(path = "/add", consumes = "application/json")
    public @ResponseBody ResponseEntity<String> addPsu(@RequestBody PsuRequest psuRequest) {
        try {
            psuRepository.save(new Psu(
                    psuRequest.getName(),
                    psuRequest.getWattage(),
                    psuRequest.getPrice()
            ));
            return new ResponseEntity<>("Successfully created.", HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("Psu could not be created.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping(path = "/delete", produces = "application/json")
    public @ResponseBody ResponseEntity<String> deletePsu(@RequestParam Integer id) {
        try {
            Optional<Psu> cpu = psuRepository.findById(id);
            psuRepository.delete(cpu.get());
            return new ResponseEntity<>("Psu deleted.", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Psu could not be deleted.", HttpStatus.OK);
        }
    }

}
