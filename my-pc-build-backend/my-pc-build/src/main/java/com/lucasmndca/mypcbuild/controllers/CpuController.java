package com.lucasmndca.mypcbuild.controllers;

import com.lucasmndca.mypcbuild.entities.Cpu;
import com.lucasmndca.mypcbuild.repositories.CpuRepository;
import com.lucasmndca.mypcbuild.requests.CpuRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(path = "/cpu")
public class CpuController {

    @Autowired
    private CpuRepository cpuRepository;

    @GetMapping(path = "")
    public @ResponseBody Iterable<Cpu> getAll() {
        return cpuRepository.findAll();
    }

    @GetMapping(path = "/{id}")
    public @ResponseBody ResponseEntity<Cpu> getCpu(@PathVariable Integer id) {
        try {
            return new ResponseEntity<>(cpuRepository.findById(id).get(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping(path = "/add", consumes = "application/json")
    public @ResponseBody ResponseEntity<String> addCpu(@RequestBody CpuRequest cpuRequest) {
        try {
            cpuRepository.save(new Cpu(
                    cpuRequest.getName(),
                    cpuRequest.getClock(),
                    cpuRequest.getCores(),
                    cpuRequest.getThreads(),
                    cpuRequest.getPrice()
            ));
            return new ResponseEntity<>("Successfully created.", HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("Cpu could not be created.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping(path = "/delete", produces = "application/json")
    public @ResponseBody ResponseEntity<String> deleteCpu(@RequestParam Integer id) {
        try {
            Optional<Cpu> cpu = cpuRepository.findById(id);
            cpuRepository.delete(cpu.get());
            return new ResponseEntity<>("Cpu deleted.", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Cpu could not be deleted.", HttpStatus.OK);
        }
    }

}
