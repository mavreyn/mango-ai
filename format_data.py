#!/usr/bin/env python3

"""Converts Original-LaTeX training data pairs into GPT-compatible jsonl."""
# Desired output:
# {"messages": [{"role": "system", "content": <<PROMPT>>}, {"role": "user", "content": <<text1>>}, {"role": "assistant", "content": <<LaTeX1>>}]}

__author__ = 'Dennis Gorman'
__date__ = '10/13/2023'

import pathlib
import re

original_str = "====ORIGINAL===="
latex_str = "====LATEX===="


def read_text(file: str) -> str:
    """Reads data from text file."""
    text = []
    if pathlib.Path(file).exists():
        with open(file, 'r') as text_file:
            text = text_file.read()
    return text


def convert_training(training_data: str, system_prompt) -> list[str]:
    """Converts string of training data to list where original and LaTeX are separated."""
    # Add escape characters
    results = re.findall(r'====ORIGINAL====\n(.+?)\n====LATEX====\n(.+?)\n\n', training_data, re.DOTALL)

    with open('results.jsonl', 'w') as file:
        system_prompt = repr(system_prompt)
        for result in results:
            orig = repr(result[0])
            tex = repr(result[1])
            file.write("{\"messages\": [{\"role\": \"system\", \"content\": \"" + system_prompt + "\"}, {\"role\": \"user\", \"content\": \"" + orig + "\"}, {\"role\": \"assistant\", \"content\": \"" + tex + "\\n\"}]}\n")


def main():
    """Prompts for files, converts them, and writes final data to JSONL file."""
    # Prompt for files and name of final file
    prompt_file = 'Mango2_prompt.txt'
    training_file = 'Mango2_train_ex.txt'

    # Create string for prompt
    prompt = read_text(prompt_file)

    # Read training data
    training_data = read_text(training_file)
    convert_training(training_data, prompt)


if __name__ == '__main__':
    main()
